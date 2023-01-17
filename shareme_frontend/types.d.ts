export interface IUser {
    image: string,
    userName: string,
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string
}

export interface IFeed {
    image: {
        asset: {
            url: string
        }
    },
    _id: string,
    destination: string,
    postedBy: {
        _id: string,
        userName: string,
        image: string
    },
    save: {
        _key: string,
        postedBy: {
            _id: string,
            userName: string,
            image: string
        },
    }[],
}
