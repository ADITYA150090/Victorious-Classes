#include <stdio.h>

int LinearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key)
            return i; // Element found at index i
    }
    return -1; // Element not found
}

int main() {
    int n, key, result;

    // Input size of array
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];

    // Input array elements
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; i++) {
        printf("Element %d: ", i + 1);
        scanf("%d", &arr[i]);
    }

    // Input key to search
    printf("Enter the element to search: ");
    scanf("%d", &key);

    // Perform Linear Search
    result = LinearSearch(arr, n, key);

    // Output result
    if (result != -1)
        printf("Element %d found at position %d (index %d).\n", key, result + 1, result);
    else
        printf("Element %d not found in the array.\n", key);

    return 0;
}
