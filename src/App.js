import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
// import Statistics from './components/Statistics/Statistics';
// import FriendList from './components/FriendList/FriendList';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
    return (
        <div>
            <Profile 
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}/>

            {/* <Statistics />
            <FriendList  />
            <TransactionHistory /> */}
        </div>
    )
};