import MessageContainer from "../../components/messages/messagecontainer";
import Sidebar from "../../components/sidebar/sidebar";

const Home = () => {
    return (
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg bg-clip-padding overflow-auto backdrop-filter backdrop-blur-lg bg-gray-400 bg-opacity-10'>
        <Sidebar />
        <MessageContainer />
      </div>
    );
};

export default Home;
