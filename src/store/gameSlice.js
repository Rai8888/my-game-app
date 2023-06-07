import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        categories: {
            // example - food: [{}, {}, {}, {}, {}],
        },
    },
    reducers: {
        updateCategories: (state, action) => {
            const categories = action.payload;
            for (let category of categories) {
                state.categories[category.title] = [];
            }
        },
        updateCategory: (state, action) => {
            const category = action.payload;
            const updateQuestions = category.clues
                .filter((clue) => !!clue.value)
                .slice(0, 5)
                .map((clue) => ({ ...clue, isAnswered: false }));
            state.categories[category.title] = updateQuestions;
        },
        hideQuestion: (state, action) => {
            const {
                question: { id },
                title,
            } = action.payload;
            let updated = state.categories[title].map((q) => {
                if (q.id !== id) return q;
                return { ...q, isAnswered: true };
            });

			state.categories[title] = updated
        },
    },
});


export const { updateCategories, updateCategory, hideQuestion } =
    gameSlice.actions;