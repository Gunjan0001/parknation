import React from 'react'

const ContactForm = () => {
  return (
    <>
      <section>
        <div className="container my-20 lg:pb-20">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" placeholder="Enter Your Name*" />
              </form>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm