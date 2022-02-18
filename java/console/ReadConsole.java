package console;

import java.io.Console;
import java.util.Scanner;

public class ReadConsole {
	public static void main(String[] args) {
		// Can only be read from console
		// Works with Eclipse console
		// Doesn't work with powershell or cmd
		Console c = System.console();
		if (c != null) {
			char[] pwd = c.readPassword(); // Text not displayed in console
			System.out.println(pwd); // Exits here
		}
		
		Scanner sc = new Scanner(System.in);
		String scpwd = sc.nextLine(); // Text displayed in console
		System.out.println(scpwd);
		sc.close();

	}
}
