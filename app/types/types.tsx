export enum itemOperation {
    ADD = 'ADD',
    SUBTRACT = 'SUBTRACT'
}

export type testimonialsType = {
    id: number,
    name: string
    review: string
    rating: number
    source: string
}

export type storesType = {
    id: number,
    name: string,
    address: string,
    timing: string,
    phoneNumber: string,
    openOn: string
}

export type processStepDataType = {
    id: number,
    data: string
}

export type categoryType = {
    id: number,
    name: string
    items: itemType[]
}

export type itemType = {
    id: number,
    name: string,
    price: number
}

export type servicesType = {
    id: number,
    name: string
    short_desc: string
    image: string
    detailed_desc: string,
    categories: categoryType[]
}

export type featuresType = {
    title: string,
    desc: string,
    img: string,
}

export type pagesType = {
    path: string
    title: string
    inHeader?: boolean
    isAction?: boolean
}

export type indexPageDataType = {
    testimonials: {
        heading: string
        sub_heading: string,
        data: testimonialsType[]
    }
    process: {
        heading: string
        sub_heading: string,
        data: processStepDataType[]
    }
    features: {
        data: featuresType[]
    }
}

export type reviewsPageDataType = {
    reviews: testimonialsType[]
}