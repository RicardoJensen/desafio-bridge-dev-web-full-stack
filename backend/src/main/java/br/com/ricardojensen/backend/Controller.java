package br.com.ricardojensen.backend;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api")

public class Controller {
    private static final int MINIMUM_N = 2;

    @GetMapping("/{k}")
    public int[] response(@PathVariable int k) {
        long startTime = System.nanoTime();
        int answer = calculate(k);
        long endTime = System.nanoTime();
        long durationInMs = (endTime - startTime) / 1000000;
        return new int[] {answer, (int) durationInMs};
    }

    public int calculate(int k) {
        if (!isValid(k)) {
            return 0;
        }

        // tendo a fatoração prima
        // x = P1^y1 * P2^y2  ...* Pn^yn
        // onde P é um fator primo e y seu expoente, temos
        // Fx = (y1 + 1) * (y2 + 1) ...* (yn + 1)
        // onde Fx é o número de fatores de x

        int[] factors = new int[k - 1];
        int amount = 0;

        Arrays.fill(factors, 1);

        for (int n = MINIMUM_N; n <= k; n++) {
            int indexN = n - MINIMUM_N;

            // se não há fatores para este número até agora, então necessariamente este número é primo
            if (factors[indexN] == 1) {
                // portanto, iteramos os multiplos de n
                for (int j = n; j <= k; j += n) {
                    // contamos quantas vezes j é divisível por n, somamos 1, e multiplicamos
                    // (pois Fx = (y1 + 1) * (y2 + 1) ...* (yn + 1))
                    factors[j - MINIMUM_N] *= countFactor(j, n) + 1;
                }
            }

            // como não há fatores acima do próprio número, já podemos checar
            // se a quantidade de fatores deste número é igual à do número passado
            if (indexN > 0 && factors[indexN] == factors[indexN - 1]) {
                amount++;
            }
        }

        return amount;
    }

    // conta quantas vezes um fator aparece na composição de um número
    public int countFactor(int number, int factor) {
        int x = number;
        int count = 0;

        while (x % factor == 0) {
            x /= factor;
            count++;
        }

        return count;
    }

    public boolean isValid(int k) {
        return k > MINIMUM_N && k < Math.pow(10, 9);
    }

}

