export type courseState = 'start' | 'lock' | 'finish';
export interface IStoreData extends Record<string, unknown> {
  windows: {
    x: number;
    y: number;
    height: number;
    width: number;
  };

  lessons: {
    1: courseState;
    2: courseState;
    3: courseState;
    4: courseState;
  };

  exams: {
    1: courseState;
    2: courseState;
    3: courseState;
    4: courseState;
  };
}
