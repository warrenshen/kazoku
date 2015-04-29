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
    login: "/people/sign_in",
    logout: "/people/sign_out",
    search: "/people/search",
  },
};
