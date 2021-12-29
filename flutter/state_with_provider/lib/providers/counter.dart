import 'package:flutter/material.dart';

class Counter with ChangeNotifier {
  int _counter = 0;

  int get counter {
    return _counter;
  }

  void incrementCounter() {
    _counter++;
    notifyListeners();
  }

  void decrementCounter() {
    _counter--;
    notifyListeners();
  }

  void setCounter(String counter) {
    _counter = int.parse(counter);
    notifyListeners();
  }
}
