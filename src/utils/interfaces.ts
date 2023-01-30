export interface IMovie {
    id: number,
    overview: string,
    poster_path: string,
    title: string,
}



export interface IObjetoEstilos {
    cardList: [
        {
            font_color: string,
            container_background_color: string
        },
        {
            font_color: string,
            container_background_color: string
        },
        {
            font_color: string,
            container_background_color: string
        },
    ]
}

export const objeto_estilos: IObjetoEstilos = {
    cardList: [
        {
            font_color: 'white',
            container_background_color: 'black'
        },
        {
            font_color: 'blue',
            container_background_color: 'yellow'
        },
        {
            font_color: 'black',
            container_background_color: 'white'
        },
    ]
}

export interface IObjetoDados {
    cardList: [
        {
            text: string,
            image: string,
            estiloID: number,
        },
        {
            text: string,
            image: string,
            estiloID: number,
        },
        {
            text: string,
            image: string,
            estiloID: number,
        },
    ]
}

export const objeto_dados: IObjetoDados = {
    cardList: [
        {
            text: 'objeto 1',
            image: 'image 1',
            estiloID: 0,
        },
        {
            text: 'objeto 2',
            image: 'image 2',
            estiloID: 1,
        },
        {
            text: 'objeto 3',
            image: 'image 3',
            estiloID: 2,
        },
    ]
}