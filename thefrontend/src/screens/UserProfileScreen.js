import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function UserProfileScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo._id]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            <div>
              <label  className="txtForm" htmlFor="name">Name</label>
              <input
              className="textfield"
                id="name"
                type="text"
                placeholder="Enter name"
                value={user.name}
              ></input>
            </div>
            <div>
              <label  className="txtForm" htmlFor="email">Email</label>
              <input
              className="textfield"
                id="email"
                type="email"
                placeholder="Enter email"
                value={user.email}
              ></input>
            </div>
            <div>
              <label   className="txtForm" htmlFor="password">Password</label>
              <input
              className="textfield"
                id="password"
                type="password"
                placeholder="Enter password"
              ></input>
            </div>
            <div>
              <label  className="txtForm" htmlFor="confirmPassword">Re-enter Password</label>
              <input
              className="textfield"
                id="confirmPassword"
                type="password"
                placeholder="Enter confirm password"
              ></input>
            </div>
            <div>
              <br/>
              <label />
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}