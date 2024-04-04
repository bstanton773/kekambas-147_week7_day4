# An infinite number of shelves are arranged one above the other in a staggered fashion.
# The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

#                  ┌────────┐
#                  │-6------│
#                  └────────┘
# ┌────────┐       
# │------5-│        
# └────────┘  ┌─────► OK!
#             │    ┌────────┐
#             │    │-4------│
#             │    └────────┘
# ┌────────┐  │
# │------3-│  │     
# BANG!────┘  ├─────► OK! 
#   ▲  |\_/|  │    ┌────────┐
#   │ ("^-^)  │    │-2------│
#   │ )   (   │    └────────┘
# ┌─┴─┴───┴┬──┘
# │------1-│
# └────────┘
# Input
# Start and finish shelf numbers (always positive integers, finish no smaller than start)

# Task
# Find the minimum number of jumps to go from start to finish

# Example
# Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
# link to cat photo if you dont want to download it : https://i.ibb.co/BymvZtL/Inspirers.jpg

# Define a function that takes in 2 params (start and end)
def solution(start, end):
    # create a variable to keep track of the jumps (start at 0)
    jumps = 0
    current_position = start
    # while loop to continue to add 3 step jumps while we can
    while current_position + 3 <= end:
        # move our cat up 3 steps 
        current_position += 3
        # add one to our jump count
        jumps += 1
    # while we are still not at the end
    while current_position < end:
        # move the cat up 1 step
        current_position += 1
        # add one to our jump count
        jumps += 1
    # Once the cat is at the end shelf, return the number of jumps
    return jumps


print(solution(66, 77))
print(solution(66, 76))
print(solution(66, 75))




# O(1)
def solution(start, end):
    total_steps = end - start
    three_step_jumps = total_steps // 3
    one_step_jumps = total_steps % 3
    return three_step_jumps + one_step_jumps
