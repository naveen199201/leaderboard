import { createSlice } from '@reduxjs/toolkit';

// Create a slice
const leaderListSlice = createSlice({
  name:'leaderList',
  initialState:{
    formDataList: [{
      name:'naveen',
      date:1721213364281,
      time: {
        seconds: 0,
        minutes:4,
        hours: 0,
      },
    },
      {
      name:'naveen1',
      date:1721213364290,
      time: {
        seconds: 0,
        minutes:7,
        hours: 0,
      },
    },{
      name:'naveen2',
      date:1721213364297,
      time: {
        seconds: 0,
        minutes:2,
        hours: 0,
      },
    },{
      name:'naveen',
      date:1721213361281,
      time: {
        seconds: 0,
        minutes:4,
        hours: 0,
      },
    },
      {
      name:'naveen1',
      date:1721213368290,
      time: {
        seconds: 0,
        minutes:7,
        hours: 0,
      },
    },{
      name:'naveen2',
      date:1721213312297,
      time: {
        seconds: 0,
        minutes:2,
        hours: 0,
      },
    },{
      name:'naveen',
      date:1721213347281,
      time: {
        seconds: 0,
        minutes:4,
        hours: 0,
      },
    },
      {
      name:'naveen1',
      date:17212133004290,
      time: {
        seconds: 0,
        minutes:7,
        hours: 0,
      },
    },{
      name:'naveen2',
      date:1721215364297,
      time: {
        seconds: 0,
        minutes:2,
        hours: 0,
      },
    },
    {
      name:'naveen2',
      date:1721215364297,
      time: {
        seconds: 0,
        minutes:2,
        hours: 0,
      },
    },{
      name:'naveen2',
      date:1721515364297,
      time: {
        seconds: 0,
        minutes:2,
        hours: 0,
      },
    },
    {
      name:'naveen2',
      date:1728215364297,
      time: {
        seconds: 0,
        minutes:2,
        hours: 0,
      },
    }

    ],
  },
  reducers: {
    addFormData: (state, action) => {
      state.formDataList.push(action.payload);
    },
  },
  
});


export const { addFormData } = leaderListSlice.actions;
export default leaderListSlice.reducer;
