export class Quote {
    quote: string
    quoting: string

    constructor(quote: string, quoting: string) {
        this.quote = quote;
        this.quoting = quoting;
    }
}

export const quotes = [
    new Quote("I skate to where the puck is going to be, not where it has been.", "Wayne Gretzky"),
    new Quote("We aim above the mark to hit the mark.", "Ralph Waldo Emerson"),
    new Quote(`Creativity is just connecting things. When you ask creative people how they did something,
        they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them
        after a while. That's because they were able to connect experiences they've had and synthesize new things.`,
        "Steve Jobs"),
    new Quote("The difference between try and triumph is a little umph.", "Marvin Phillips"),
    new Quote(`I don’t wanna be Jordan, I don’t wanna be Magic, I don’t wanna be Bird or Isiah. I don’t wanna be any
        of those guys. When my career’s over, I want to look in the mirror and say I did it my way.`, "Allen Iverson"),
    new Quote("There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
        "Leon Bambrick"),
    new Quote("Stay hungry. Stay foolish.", "Steve Jobs")
]