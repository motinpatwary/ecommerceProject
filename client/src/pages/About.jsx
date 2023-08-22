import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
    return (
        <Layout title={"About us - Ecommerce app"}>
            <div className="row contactus">
                <div className="col-md-6">
                    <img src="/images/about.jpeg" alt="contactus" style={{width:"100%"}} />
                </div>
                <div className="col-md-4">
                    <p className='text-justify mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore accusantium porro distinctio eveniet aspernatur sequi, magnam mollitia quas quis consectetur est earum quisquam veniam beatae error maxime rerum expedita laudantium. Eligendi sed maiores illo repellat, eos amet. Aperiam eius doloremque, maiores nulla eaque aliquid et veritatis laudantium at ullam dolorum laborum corrupti explicabo assumenda vero maxime consequuntur tenetur ex dolor incidunt, provident eligendi temporibus quaerat velit? Doloremque, sapiente quo!</p>
                </div>
            </div>
        </Layout>
    );
};

export default About;