import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import moviesServices from "../services/moviesServices";
import { IMovie } from "../utils/interfaces";

interface IMoviesState {
    movies: IMovie[],
    success: boolean,
    loading: boolean,
    error: any,
    // updated: boolean,
}

const initialState: IMoviesState = {
    movies: [],
    error: false,
    success: false,
    loading: false,
};

//list movies
export const listMovies: any = createAsyncThunk(
    "movies/listMovies",
    async () => {
        const data = await moviesServices.listMovies()
        console.log('slice', data)
        return data;
    }
)

// export const getmovie: any = createAsyncThunk(
//     "movies/getmovie",
//     async (id: number) => {
//         const data = await moviesServices.getMovie(id)
//         return data;
//     }
// )


export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        reset: (state) => {
            state.movies = [];
            state.error = false;
            state.success = false;
            state.loading = false;

        },
    },
    extraReducers: (builder: any) => {
        builder
            .addCase(listMovies.pending, (state: any) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(listMovies.fulfilled, (state: any, action: PayloadAction<IMovie[]>) => {
                state.loading = false;
                state.success = true;
                state.error = false;
                state.movies = action.payload;
            })
        // .addCase(getmovie.pending, (state: any) => {
        //     state.loading = true;
        //     state.error = false;
        // })
        // .addCase(getmovie.fulfilled, (state: any, action: any) => {
        //     state.loading = false;
        //     state.success = true;
        //     state.error = false;
        //     state.movie = action.payload;
        // })
    }
})

export const { reset } = moviesSlice.actions;
export default moviesSlice.reducer;