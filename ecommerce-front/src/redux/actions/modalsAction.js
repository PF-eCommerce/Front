export const CLOSE_CHILD_MODAL = 'CLOSE_CHILD_MODAL';
export const CLOSE_NEST_MODAL = 'CLOSE_NEST_MODAL';

export function closeChildModal() {
    return {
      type: CLOSE_CHILD_MODAL
    };
  }
export function closeNestModal() {
    return {
      type: CLOSE_NEST_MODAL
    };
  }
