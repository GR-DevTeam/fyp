import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { ILink } from '../../components/atoms/Link/Link';
import { Colors } from '../../theme/styled';
import theme from '../../theme/theme';

// un estado es inmutable
const initialState: ILink[] = [
  {
    icon: faUserFriends,
    text: 'Home',
    color: theme.colors.light,
    hoverColor: theme.colors.primary,
  },
  {
    icon: faUserFriends,
    text: 'Planning',
    color: theme.colors.light,
    hoverColor: theme.colors.primary,
  },
  {
    icon: faUserFriends,
    text: 'Saved places',
    color: theme.colors.light,
    hoverColor: theme.colors.primary,
  },
  {
    icon: faUserFriends,
    text: 'Past trips',
    color: theme.colors.light,
    hoverColor: theme.colors.primary,
  },
  {
    icon: faUserFriends,
    text: 'About us',
    color: theme.colors.light,
    hoverColor: theme.colors.primary,
  },
];
export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
});

export const selectMenu = (state: RootState) => state.menu;

export default menuSlice.reducer;
