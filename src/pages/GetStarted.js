function GetStartedPage() {
    return <div>
        <section className='getStarted'>
            <div>
                <h3> You deserve <span> financial freedom! </span> </h3>
                <p>Get started here.</p>
            </div>
            <form>
                <input placeholder='First Name' required />
                <input placeholder='Last Name' required/>
                <input placeholder='Email' required/>
                <button>Get Started</button>
            </form>
        </section>
    </div>
}

export default GetStartedPage;