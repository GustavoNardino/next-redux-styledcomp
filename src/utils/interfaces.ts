export interface IMovie {
    id: number,
    overview: string,
    poster_path: string,
    title: string,
}

// container

export interface IContainerEstilos {
    box_shadow: string,
    background_color: string
}

export const container_estilos: IContainerEstilos[] = [
    {
        box_shadow: '',
        background_color: 'black'
    },

]

//card
export interface IcardEstilos {
    estiloscontainer: string,
    estilosText: string,
}


//card panel

export interface IcardPanelEstilos {
    estiloscontainer: string,
    estilosTitulo: string
}

