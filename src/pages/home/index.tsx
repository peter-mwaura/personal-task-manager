import Navbar from '../../components/Navbar';
import Timer from '../../components/Timer';
import Task from '../../components/Task';
const Home = () => {
    return (
        <>
            <Navbar />
            <section className="hero">
                <Timer />
                <Task />
            </section>
        </>
    );
};

export default Home;
