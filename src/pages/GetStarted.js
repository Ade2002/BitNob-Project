function GetStartedPage() {
    return <div>
        <section className='getStarted'>
            <div>
                <h1> You deserve <span> financial freedom! </span> </h1>
                <h1>Get started here.</h1>
            </div>
            <form>
                <input placeholder='First Name' required />
                <input placeholder='Last Name' required/>
                <input placeholder='Email' required/>
                <button>Get Started Now</button>
            </form>
        </section>
    </div>
}

export default GetStartedPage;