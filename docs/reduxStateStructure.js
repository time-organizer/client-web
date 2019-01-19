/* eslint-disable */

const reduxStateStructure = {
  auth: {
    isFetching: false,
    signUpServerError: '',
    loginServerError: '',
  },
  general: {
    fullscreenLoading: false,
    userSidebarOpened: false,
    menuSidebarOpened: false,
    forms: {
      newBoardFormOpened: false,
    },
  },
  user: {
    profile: null,
    isFetching: false,
    didInvalidate: false,
    userServerError: '',
    isUploadingAvatar: false,
    uploadError: '',
  },
  boards: {
    workspace: {
      board: {
        isFetching: false,
        isFetchingColumns: false,
        didInvalidate: false,
        serverError: '',
        data: {},
      },
      columns: {
        isFetching: false,
        serverError: '',
        columnsOrderBackup: [],
        data: {
          entries: {
            exampleColumnId: {
              columnContent: {},
              exampleColumnTasksOrder: [
                'task1Id', 'task2Id', 'task3Id',
              ],
            },
          },
          columnsOrder: [
            'column1Id', 'column2Id', 'column3Id',
          ],
        },
      },
      tasks: {
        isFetching: false,
        serverError: '',
        tasksOrderBackup: {},
        data: {
          entries: {
            exampleTaskId: {
              taskContent: {},
            },
          },
        },
      },
    },
    new: {
      isFetching: false,
      newBoardServerError: '',
    },
    list: {
      isFetching: false,
      boardsById: {},
      serverError: '',
      didInvalidate: false,
    },
  },
};
