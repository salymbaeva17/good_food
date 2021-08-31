import React from 'react';

const YouTube = ({youtube}) => {
    return (
        <iframe className="mt-5" width="600" height="400" src={`https://www.youtube.com/embed/${youtube}`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
    );
};

export default YouTube;