import React from 'react'

const Like = (props) => {

    return (
        <>
            <i onClick={() => props.onLike(props.movies)} className={props.movies.like === true ? 'fa fa-heart' : 'fa fa-heart-o'} style={{ cursor: "pointer " }} aria-hidden="true"></i>
        </>
    )
}
export default Like;
