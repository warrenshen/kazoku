module.exports = {

  events: {
    index: "/events",
  },

  families: {
    index: "/families",
    new: "/families/new",
  },

  familyEvents: {
    index: "/family_events",
  },

  people: {
    index: "http://localhost:3000/api/people",
    search: "/people/search",
  },

  sessions: {
    me: "http://localhost:3000/api/me",
    login: "http://localhost:3000/api/people/sign_in",
    logout: "http://localhost:3000/api/people/sign_out",
  }
};
