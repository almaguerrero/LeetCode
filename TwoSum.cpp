#include <iostream>
#include <vector>

int main() {
    // Crear un vector de ejemplo
    std::vector<int> miVector = {1, 2, 3, 4, 5};

    // Iterar desde adelante hacia atr�s
    std::cout << "Iterando desde adelante hacia atr�s:" << std::endl;
    for (size_t i = 0; i < miVector.size(); ++i) {
        std::cout << miVector[i] << " ";
    }
    std::cout << std::endl;

    // Iterar desde atr�s hacia adelante
    std::cout << "\nIterando desde atr�s hacia adelante:" << std::endl;
    for (int i = miVector.size() - 1; i >= 0; --i) {
        std::cout << miVector[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}

