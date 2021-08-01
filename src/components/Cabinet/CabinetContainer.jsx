import React, {component} from "react";
import {renderCabinet} from "./Cabinet";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    debugger
    return(
        {data:state.cabinetData}
    )
}
let mapDispatchToProps=(dispatch)=>{
    return(
        {}
    )
}
export let renderCabinetContainer=connect(mapStateToProps,mapDispatchToProps)(renderCabinet);