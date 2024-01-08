#include <gtest/gtest.h>
#include <main.cpp>

// Demonstrate some basic assertions.
TEST(AddFunctionTest, SumTest) {
  // test 1
  EXPECT_EQ(add(3, 4), 7);

  // test 2
  EXPECT_EQ(add(1, -1), 0);

  // test 3
  EXPECT_NE(add(4, -2), 6)
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}