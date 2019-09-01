import { useEffect, useState } from 'react';

import useObjectURL from './';

jest.mock('react', () => ({
  useEffect: jest.fn((callback: () => void | (() => void)) => callback()),
  useState: jest.fn(<T>(initialState: T) => [initialState, jest.fn()])
}));

window.URL = Object.assign(jest.fn(), {
  createObjectURL: jest.fn(),
  revokeObjectURL: jest.fn()
});

describe('useObjectURL | unit', () => {
  describe('when called', () => {
    it('returns the state', () => {
      const fileURL = 'https://url.com/report.pdf';
      (useState as jest.Mock).mockReturnValueOnce([fileURL]);

      expect(useObjectURL(null)).toBe(fileURL);
    });
  });

  describe('when receives `null` as object', () => {
    it("doesn't create an URL", () => {
      useObjectURL(null);

      expect(URL.createObjectURL).not.toHaveBeenCalled();
    });
  });

  describe('when receives an instance of `File` as object', () => {
    it('creates an URL', () => {
      const file = new File([], 'Notes.txt');

      useObjectURL(file);

      expect(URL.createObjectURL).toHaveBeenCalledWith(file);
    });

    it('saves created URL on state', () => {
      const file = new File([], 'Notes.txt');
      const fileURL = 'https://url.com/notes.txt';

      const setState = jest.fn();

      (URL.createObjectURL as jest.Mock).mockReturnValueOnce(fileURL);
      (useState as jest.Mock).mockReturnValueOnce([null, setState]);

      useObjectURL(file);

      expect(setState).toHaveBeenCalledWith(fileURL);
    });
  });

  describe('when component unmount or parameter changes', () => {
    beforeEach(() => {
      (useEffect as jest.Mock).mockImplementationOnce(
        (callback: () => () => void) => callback()()
      );
    });

    it('clean up the state', () => {
      const file = new File([], 'myHours.xls');
      const fileURL = 'https://url.com/myHours.xls';

      const setState = jest.fn();

      (URL.createObjectURL as jest.Mock).mockReturnValueOnce(fileURL);
      (useState as jest.Mock).mockReturnValueOnce([fileURL, setState]);

      useObjectURL(file);

      expect(setState).toHaveBeenCalledWith(null);
    });

    it('revoke created URL', () => {
      const file = new File([], 'myHours.xls');
      const fileURL = 'https://url.com/myHours.xls';

      const setState = jest.fn();

      (URL.createObjectURL as jest.Mock).mockReturnValueOnce(fileURL);
      (useState as jest.Mock).mockReturnValueOnce([fileURL, setState]);

      useObjectURL(file);

      expect(URL.revokeObjectURL).toHaveBeenCalledWith(fileURL);
    });
  });
});
