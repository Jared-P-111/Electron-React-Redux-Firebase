import React from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        {/* ########## USER LIST START ############ */}
        <div className="list-container">
          <div className="chat-search-box">
            <div className="input-group">
              <input className="form-control" placeholder="Search" />
            </div>
          </div>
          <ul className="items">
            <li onClick={() => {}} className="item">
              <div className="item-status">
                <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
                <span className="status online"></span>
              </div>
              <p className="name-time">
                <span className="name mr-2">Some User 1</span>
              </p>
            </li>
            <li onClick={() => {}} className="item">
              <div className="item-status">
                <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
                <span className="status online"></span>
              </div>
              <p className="name-time">
                <span className="name mr-2">Some User 2</span>
              </p>
            </li>
            <li onClick={() => {}} className="item">
              <div className="item-status">
                <img src="https://i.dlpng.com/static/png/7105396_preview.png" alt="Retail Admin" />
                <span className="status online"></span>
              </div>
              <p className="name-time">
                <span className="name mr-2">Some User 3</span>
              </p>
            </li>
            <li onClick={() => {}} className="item">
              <div className="item-status">
                <img src="https://i.dlpng.com/static/png/7105396_preview.png" alt="Retail Admin" />
                <span className="status online"></span>
              </div>
              <p className="name-time">
                <span className="name mr-2">Some User 4</span>
              </p>
            </li>
          </ul>
        </div>
        {/* ########## USER LIST END ############ */}
      </div>
      <div className="col-9 fh">
        {/* ########## CHAT NAME CONTAINER START ############ */}
        <div className="chat-name-container">
          <span className="name">Chat 1</span>
          <Link to="/" className="btn btn-primary btn-sm back-button">
            Back
          </Link>
        </div>
        {/* ########## CHAT NAME CONTAINER END ############ */}
        <div className="chat-container">
          <ul className="chat-box chatContainerScroll">
            <li className="chat-left">
              <div className="chat-avatar">
                <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
                <div className="chat-name">Test User 1</div>
              </div>
              <div className="chat-text-wrapper">
                <span className="chat-text">Some message 1</span>
                <span className="chat-spacer"></span>
                <div className="chat-hour">5h ago</div>
              </div>
            </li>
            <li className="chat-right">
              <div className="chat-avatar">
                <img src="https://i.dlpng.com/static/png/7105396_preview.png" alt="Retail Admin" />
                <div className="chat-name">Test User 2</div>
              </div>
              <div className="chat-text-wrapper">
                <span className="chat-text">Some message 2</span>
                <span className="chat-spacer"></span>
                <div className="chat-hour">5h ago</div>
              </div>
            </li>
            <li className="chat-left">
              <div className="chat-avatar">
                <img src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" alt="Retail Admin" />
                <div className="chat-name">Test User 3</div>
              </div>
              <div className="chat-text-wrapper">
                <span className="chat-text">Some message 3</span>
                <span className="chat-spacer"></span>
                <div className="chat-hour">5h ago</div>
              </div>
            </li>
            <li className="chat-right">
              <div className="chat-avatar">
                <img src="https://i.dlpng.com/static/png/7105396_preview.png" alt="Retail Admin" />
                <div className="chat-name">Test User 4</div>
              </div>
              <div className="chat-text-wrapper">
                <span className="chat-text">Some message 4</span>
                <span className="chat-spacer"></span>
                <div className="chat-hour">5h ago</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chat;
