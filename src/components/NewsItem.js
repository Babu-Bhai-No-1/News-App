import React from 'react'

const NewsItem =(props)=>{
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
          <span className="badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
          </div>
          <img src={!imageUrl?"https://dims.apnews.com/dims4/default/7b9eb74/2147483647/strip/true/crop/5616x3159+0+293/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F10%2F48%2F6333fb11f99cbb608f876fc66f59%2F615ce013c17b4ee19e98e5dabd5eba99":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
