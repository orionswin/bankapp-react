function UserForm() {
    return (
        <>
            <br />
            <input type="text" id="username" name="username" placeholder="Enter username" aria-required></input><br />
            <input type="text" id="fname" name="fname" placeholder="First name" aria-required></input><br />
            <input type="text" id="mname" name="mname" placeholder="Middle name" aria-required></input><br />
            <input type="text" id="lname" name="lname" placeholder="Last name" aria-required></input><br />
            <input type="text" id="address1" name="address1" placeholder="Address Line 1" aria-required></input><br />
            <input type="text" id="address2" name="address2" placeholder="Address Line 2" aria-required></input><br />
            <input type="tel" id="phone" name="phone" placeholder="09xx xxx xxxx" pattern="09[0-9]{2} [0-9]{3} [0-9]{4}" aria-required></input><br /><br />
            <button>Generate Account Number</button>
        </>
    );
}

export default UserForm;
