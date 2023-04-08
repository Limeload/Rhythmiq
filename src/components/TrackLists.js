import React from "react";
import Track from "./Track";

function TrackLists(props) {
    return (
        <div>
            <div className="TrackList">
            {props.tracks.map(track => {
          return <Track key={track.id} track={track} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval}  />
        })}</div>
        </div>
    )
}

export default TrackLists;
