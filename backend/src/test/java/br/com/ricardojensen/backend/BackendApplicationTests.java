package br.com.ricardojensen.backend;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BackendApplicationTests {

	@Test
	void unitTestIsValid() {
		Controller controller = new Controller();
		assertEquals(true, controller.isValid(3));
		assertEquals(false, controller.isValid(-5));
		assertEquals(false, controller.isValid(0));
		assertEquals(false, controller.isValid(1000000000));
	}

	@Test
	void unitTestCalculate() {
		Controller controller = new Controller();
		assertEquals(0, controller.calculate(1));
		assertEquals(15, controller.calculate(100));
		assertEquals(0, controller.calculate(-100));
		assertEquals(102093, controller.calculate(1000000));
	}

	@Test
	void unitTestCountFactor() {
		Controller controller = new Controller();
		assertEquals(3, controller.countFactor(8, 2));
		assertEquals(1, controller.countFactor(22, 2));
		assertEquals(1, controller.countFactor(3, 3));
		assertEquals(2, controller.countFactor(1225, 5));
	}

}
