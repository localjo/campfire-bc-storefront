/* eslint-disable */
import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import CartContext from '../../context/CartProvider';
import Cart from './Cart';

import './Notify.css';

export default () => {
  const value = useContext(CartContext);
  const notifications = value && value.notifications;
  const hasNotifications = Array.isArray(notifications) && notifications.length;

  return hasNotifications ? (
    <section className="Notify">
      {notifications.map((note) => (
        <Notification key={note.id} {...note} />
      ))}
    </section>
  ) : null;
};

const Notification = ({ id, text, type }) => {
  const value = useContext(CartContext);
  const removeNotification = value && value.removeNotification;
  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotification(id);
    }, 7000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  return (
    <article className="Notification Animate">
      <div className="Content">
        <div className="Message">
          <div className="Title">
            <div className="Text">Your Bag</div>
            <div className="Icon" onClick={() => removeNotification(id)}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADYnBkbAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAACKElEQVRIDe2WO0tcQRTHvYJCQBtFJL5YC20EMUU+hJioX8FO8VVZWKpYCNkiIYEErCxNpSi2Wtlqp40sKIog4qMQV5fr7ywz7GTYmTt7VySFB/6cx5z/OTOzM3O3puZd3mgHotA+cRx3kTsChkAGdACRM5ADW2AjiqJTdPVCw3bwBzyDJCmQsA4yVXWmwCi4B5XKHYThVM0hzgJZQVoR7kxFzSHISqtpqicrNcJWTmIHSLO9upmtZdvb7JXX2gH8RdBQJp421AhxwUtmZl3AdXqzmkzOMtDy14h/00FLS019/XR6STM4YxFM9wnnk2SjG8ElyIMeFRvAlhyXTJY6WRaMHRdLxffRxZ8HLaf+p2pah30AfLJttSu5sI59TDU2rprV4zcpez6Ad1TqZFmQ5QQmyTUJrZqK3QsekkiM32mOaPtUh7zdeXiPRhHxC4bvMmNzwG58bg467Dk+BDes4APAjHLkLTlyzfCF6fxjUyjpcO1KMyGhs2BM2XK4DoFPvIdrysOUq9KvGvVhy1W6As0q9hnb9QYwFE9IXllhsNNDXhES4xHYA1p+6WIEfuigpWXS7gdEFV61SK/h/taTc2q6tIOQaxU6oVsSPzobmgMkDgLf7xXaVD6LX83aiTYEeber+SYLdzqxUbkEiMMgzbbL9n4pVzM4RoEW8B34vjwMF0VWuQYSf9OQJ7I4SYrJddB/b7ux9fWQv7cnQB6ITV4y8d/l/9mBF9YWxvjQYnCFAAAAAElFTkSuQmCC"
                alt="Close"
              />
            </div>
          </div>
          <div className="bc-ajax-add-to-cart__message-wrapper">
            <p className="bc-ajax-add-to-cart__message bc-alert bc-alert--success">
              {text}
            </p>
          </div>
          <Cart cartType="overlay" />
          <div className="Actions">
            <Link
              to="/bag"
              className="btn bc-btn"
              onClick={() => removeNotification(id)}
            >
              View Bag
            </Link>
            <a
              href={value.state.cart.redirectUrls.checkout_url}
              className="btn bc-btn"
            >
              Go to Checkout
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
