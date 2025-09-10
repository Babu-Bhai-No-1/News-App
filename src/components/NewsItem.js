import React from 'react'

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  return (
    <div className="my-3">
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
          <span className="badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
            {source || "Unknown"}
          </span>
        </div>
        <img
          src={imageUrl || "https://dims.apnews.com/dims4/default/beca2f4/2147483647/strip/true/crop/3849x2165+0+200/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc6%2F02%2Fd585571e05d02a95f95ea120270f%2Ff2021b8d889e4abf93b9e9ea30549c2b"}
          className="card-img-top"
          alt={title || "News image"}
        />
        <div className="card-body">
          <h5 className="card-title">{title || "No Title Available"}</h5>
          <p className="card-text">{description || "No description available."}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author || "Unknown"} on {date ? new Date(date).toGMTString() : "N/A"}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
