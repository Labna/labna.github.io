<?php?>    
<form id="formRegister" method="post" action="Model/register.php">
	<label for="lastname"><br><br>Lastname :</label>
    <input type="text" name="lastname" id="lastname" /><br/><br/>
    <label for="firstname">Firstname :</label>
    <input type="text" name="firstname" id="firstname" /><br/><br/>
    <label for="password">Password :</label>
    <input type="password" name="password" id="password" /><br><br />
    <label for="email">e-mail :</label>
    <input type="email" name="email" id="email" /><br><br />  
    <label for="birthday">Birthday :</label>
    <input type="date" name="birthday" id="birthday"/><br/><br/>
    <input type="submit" value="Send" class="auto-style1" style="width: 90px" />
    </form>
