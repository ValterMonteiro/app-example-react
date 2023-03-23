export type Contact = {
  name: {
    first: String,
    last: String,
  },

  email: String,

  picture?: {
    medium: String,
  }
}
