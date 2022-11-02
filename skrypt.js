function konwersjaPodstawLiczby(liczba, podstawaLiczby, podstawaDoPrzekonwertowania) {
	
	liczba = liczba.toString();
	var alfabet = "0123456789ABCDEFGHIKLMNOPQRSTVXYZ";
	var dlugoscLiczby = liczba.length;
	
	var liczbaDziesietnie = 0;
	
	
	//konwersja liczby na liczbę dziesiętną
	for (var x = dlugoscLiczby-1; x >= 0; x--) {
		
		
		for (var a = 0; a < alfabet.length; a++) {
			
			
			if (liczba[x] == alfabet[a]) {
				
				
				liczbaDziesietnie = liczbaDziesietnie + ( a * Math.pow(parseInt(podstawaLiczby), Math.abs(x - dlugoscLiczby + 1) ) );
				
				
				
			}
			
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	//konwersja liczby na liczbę o wybranej podstawie
	
	var wynikDzielenia = -1;
	var reszta_Z_Dzielenia = -1;
	
	liczbaDziesietnie = parseInt(liczbaDziesietnie);
	
	var liczbaDziesietnie_W_Ciagu = liczbaDziesietnie.toString();
	
	var wynik = "";
	
	
	while (liczbaDziesietnie != 0) {
		
		
		
		
		reszta_Z_Dzielenia = liczbaDziesietnie % podstawaDoPrzekonwertowania;
		
		liczbaDziesietnie = Math.floor(liczbaDziesietnie / podstawaDoPrzekonwertowania);
		
		
		wynik = alfabet[reszta_Z_Dzielenia] + wynik;
		
		
		
	}
		
		
	
	return wynik;
	
	




	
}
	
	
	






function myFunction() {
	
	var liczba = prompt("Wprowadź liczbę do przekonwertowania");
	var podstawaLiczby = prompt("Wprowadź podstawę liczby");
	var podstawaDoPrzekonwertowania = prompt("Wprowadź podstawę na którą chcesz przekonwertować liczbę");
	
	liczba = liczba.toUpperCase();
	
	
	alert( konwersjaPodstawLiczby(liczba, podstawaLiczby, podstawaDoPrzekonwertowania) );
	
}