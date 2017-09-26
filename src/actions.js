export const REQUEST_HELLO_WORLD = 'REQUEST_HELLO_WORLD';
export const RECEIVE_HELLO_WORLD = 'RECEIVE_HELLO_WORLD';

export const REQUEST_SKILLS = 'REQUEST_SKILLS';
export const RECEIVE_SKILLS = 'RECEIVE_SKILLS';

export const requestHelloWorld = () => ({ type: REQUEST_HELLO_WORLD });
export const receiveHelloWorld = (text) => ({ type: RECEIVE_HELLO_WORLD, text });

export const requestSkills = () => ({ type: REQUEST_SKILLS });
export const receiveSkills = (skills) => ({ type: RECEIVE_SKILLS, skills });
