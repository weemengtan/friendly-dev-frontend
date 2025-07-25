import { Outlet } from "react-router";
import Hero from "../../components/Hero";

const HomeLayout = () => {
    return (
        <>
            <Hero name="Terens Tan" text="I'm the most friendly developer you'll ever meet and I like to build things with code but most importantly help you build great things with code" />
            <section className="max-w-6xl mx-auto px-6 my-8">
                <Outlet />
            </section>
        </>
    );
};

export default HomeLayout;