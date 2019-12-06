import { authFetch } from 'Services';

const getCampaign = async campaignId => {
  const [campaign, isConfigured, { docs: schedules }] = await Promise.all([
    authFetch.get(`/campaigns/${campaignId}`),
    authFetch.get(`/campaigns/${campaignId}/isConfigured`),
    authFetch.get(`/campaigns/${campaignId}/schedules?limit=1000`)
  ]);

  return [campaign, isConfigured, schedules];
};

const checkInconsistenciesCampaignSchedule = campaignId =>
  authFetch.get(`/campaigns/${campaignId}/inconsistencies`);

const isConfigured = campaignId =>
  authFetch.get(`/campaigns/${campaignId}/isConfigured`);

const updateCampaign = campaign => {
  const { campaignId, ...rest } = campaign;
  return authFetch.put(`/campaigns/${campaign._id}`, {
    body: {
      ...rest,
      ...(campaignId && { campaignId })
    }
  });
};

const updateCampaignStatus = (campaignId, status) =>
  authFetch.patch(`/campaigns/${campaignId}/status`, {
    body: { status }
  });

const createSchedule = campaignId =>
  authFetch.post(`/campaigns/${campaignId}/schedules`, {});

const updateSchedule = async schedule => {
  const updatedSchedule = await authFetch.put(
    `/campaigns/${schedule.campaign}/schedules/${schedule._id}`,
    { body: schedule }
  );
  const isConfigured = await authFetch.get(
    `/campaigns/${schedule.campaign}/isConfigured`
  );
  return [updatedSchedule, isConfigured];
};

const updateSchedulePriority = (schedule, movement) =>
  authFetch.put(
    `/campaigns/${schedule.campaign}/schedules/${schedule._id}/move-priority`,
    { body: { movement } }
  );

const deleteSchedule = async schedule => {
  const deletedSchedule = await authFetch.delete(
    `/campaigns/${schedule.campaign}/schedules/${schedule._id}`
  );
  const isConfigured = await authFetch.get(
    `/campaigns/${schedule.campaign}/isConfigured`
  );
  return [deletedSchedule, isConfigured];
};

const saveAsTemplate = async template =>
  authFetch.post(`/templates`, { body: template });

export const apiCalls = {
  getCampaign,
  checkInconsistenciesCampaignSchedule,
  isConfigured,
  updateCampaign,
  updateCampaignStatus,
  createSchedule,
  updateSchedule,
  updateSchedulePriority,
  deleteSchedule,
  saveAsTemplate
};

export const initialState = {
  campaign: undefined,
  inconsistencies: [],
  isConfigured: { isConfigured: false, reason: 'loading' },
  schedules: [],
  selectedSchedule: undefined,
  selectedDefault: false,
  loading: true,
  creatingSchedule: false,
  updatingSchedule: false,
  updatingPriority: false,
  updatingCampaing: false
};

export const actions = {
  setCampaign: campaignInfo => ({
    type: 'SET_CAMPAIGN',
    payload: campaignInfo
  }),
  setInconsistencies: inconsistencies => ({
    type: 'SET_INCONSISTENCIES',
    payload: inconsistencies
  }),
  updateCampaign: updatedCampaign => ({
    type: 'UPDATE_CAMPAIGN_SUCCESS',
    payload: updatedCampaign
  }),
  selectSchedule: schedule => ({
    type: 'SELECT_SCHEDULE',
    payload: schedule
  }),
  createSchedule: newSchedule => ({
    type: 'CREATE_SCHEDULE_SUCCESS',
    payload: newSchedule
  }),
  updateSchedule: (updatedSchedule, isConfigured) => ({
    type: 'UPDATE_SCHEDULE_SUCCESS',
    payload: {
      isConfigured,
      updatedSchedule
    }
  }),
  updateSchedulePriority: (origin, destiny) => ({
    type: 'UPDATE_SCHEDULE_PRIOTITY_SUCCESS',
    payload: {
      origin,
      destiny
    }
  }),
  deleteSchedule: (deletedSchedule, isConfigured) => ({
    type: 'DELETE_SCHEDULE',
    payload: {
      deletedSchedule,
      isConfigured
    }
  })
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_CAMPAIGN':
      const selectedSchedule = payload.schedules.find(
        sch => sch._id === payload.selectedScheduleId
      );
      return {
        ...state,
        loading: false,
        campaign: payload.campaign,
        isConfigured: payload.isConfigured,
        schedules: payload.schedules,
        selectedSchedule,
        selectedDefault: payload.selectedScheduleId === 'default'
      };
    case 'SET_CAMPAIGN_FAILED':
      return {
        ...state,
        loading: false,
        error: true
      };
    case 'SET_INCONSISTENCIES':
      return {
        ...state,
        inconsistencies: payload
      };
    case 'UPDATE_CAMPAIGN':
      return {
        ...state,
        updatingCampaing: true
      };
    case 'UPDATE_CAMPAIGN_SUCCESS':
      return {
        ...state,
        updatingCampaing: false,
        campaign: payload
      };
    case 'UPDATE_CAMPAIGN_FAILED':
      return {
        ...state,
        updatingCampaing: false
      };
    case 'SELECT_SCHEDULE':
      return {
        ...state,
        selectedSchedule: payload,
        selectedDefault: false
      };
    case 'SELECT_DEFAULT':
      return {
        ...state,
        selectedSchedule: undefined,
        selectedDefault: true
      };
    case 'CLOSE_SCHEDULE':
      return {
        ...state,
        selectedSchedule: undefined,
        selectedDefault: false
      };
    case 'CREATE_SCHEDULE':
      return {
        ...state,
        creatingSchedule: true
      };
    case 'CREATE_SCHEDULE_SUCCESS':
      return {
        ...state,
        creatingSchedule: false,
        isConfigured: false,
        schedules: [...state.schedules, payload],
        selectedSchedule: payload
      };
    case 'CREATE_SCHEDULE_FAILED':
      return {
        ...state,
        creatingSchedule: false
      };
    case 'UPDATE_SCHEDULE':
      return {
        ...state,
        updatingSchedule: true
      };
    case 'UPDATE_SCHEDULE_SUCCESS':
      return {
        ...state,
        updatingSchedule: false,
        isConfigured: payload.isConfigured,
        schedules: state.schedules.map(sch =>
          sch._id === payload.updatedSchedule._id
            ? payload.updatedSchedule
            : sch
        )
      };
    case 'UPDATE_SCHEDULE_FAILED':
      return {
        ...state,
        updatingSchedule: false
      };
    case 'UPDATE_SCHEDULE_PRIOTITY':
      return {
        ...state,
        updatingPriority: true
      };
    case 'UPDATE_SCHEDULE_PRIOTITY_SUCCESS':
      return {
        ...state,
        updatingPriority: false,
        schedules: Object.assign([], state.schedules, {
          [payload.origin.priority - 1]: payload.origin,
          [payload.destiny.priority - 1]: payload.destiny
        }),
        selectedSchedule: state.selectedSchedule ? payload.origin : undefined
      };
    case 'UPDATE_SCHEDULE_PRIOTITY_FAILED':
      return {
        ...state,
        updatingPriority: false
      };
    case 'DELETE_SCHEDULE':
      const newSchedules = state.schedules.filter(
        sch => sch._id !== payload.deletedSchedule._id
      );
      return {
        ...state,
        isConfigured: payload.isConfigured,
        schedules: newSchedules,
        selectedSchedule: undefined,
        selectedDefault: false
      };
    default:
      return state;
  }
};
