import React, { component } from "react";

let initial_state=[{id:1,name:"Константин",
                        progress:[{id:1,name:"Урок 1",exerciceCount:100,exerciceComleted:90,error:19,warning:35,time:100,earned:1000},
                                  {id:2,name:"Урок 2",exerciceCount:95,exerciceComleted:79,error:14,warning:23,time:90,earned:500},
                                  {id:3,name:"Урок 3",exerciceCount:85,exerciceComleted:73,error:13,warning:23,time:80,earned:700}]},
                    {id:2,name:"Алексей",
                        progress:[{id:1,name:"Урок 1",exerciceCount:93,exerciceComleted:90,error:12,warning:35,time:120,earned:997},
                            {id:2,name:"Урок 2",exerciceCount:97,exerciceComleted:34,error:65,warning:45,time:110,earned:500},
                            {id:3,name:"Урок 3",exerciceCount:85,exerciceComleted:73,error:13,warning:23,time:80,earned:700}]},
                     {id:3,name:"Ирина",
                         progress:[{id:1,name:"Урок 1",exerciceCount:67,exerciceComleted:45,error:12,warning:35,time:120,earned:997},
                                   {id:2,name:"Урок 2",exerciceCount:77,exerciceComleted:34,error:12,warning:45,time:110,earned:500},
                                   {id:3,name:"Урок 3",exerciceCount:99,exerciceComleted:73,error:13,warning:23,time:80,earned:700}]}
                    ]

export let cabinetReducer=(state=initial_state,action)=> {
    switch (action.type) {
        case "set_login_data":

            alert("hello")
        default:
            return state;
    }

}