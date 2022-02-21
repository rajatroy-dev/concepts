package completablefuture;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

public class ThenCombine {

    static CompletableFuture<List<String>> getRecommendedMovies() {
        return CompletableFuture.supplyAsync(() -> Arrays.asList("The Shawshank Redemption", "The Godfather",
                " The Godfather: Part II", "The Dark Knight", "12 Angry Men"));
    }

    static CompletableFuture<List<String>> getRecommendedSeries() {
        return CompletableFuture.supplyAsync(() -> Arrays.asList("Planet Earth II", "Planet Earth", "Breaking Bad",
                "Band of Brothers", "Chernobyl"));
    }

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        Future<List<String>> allRecommendations = getRecommendedMovies().thenCombine(getRecommendedSeries(),
                (movies, series) -> {
                    List<String> recommendations = new ArrayList<>();
                    recommendations.addAll(movies);
                    recommendations.addAll(series);

                    return recommendations;
                });

        System.out.println(allRecommendations.get());
    }
}
