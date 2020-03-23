import itertools


def game_board(game_map, player=0, row=0, col=0, display=False):
    try:
        if game_map[row][column] == 0:
            print("You cannot use this position!")

        print("   0  1  2")
        if not display:
            game_map[row][col] = player
        for i, row in enumerate(game):
            print(i, row)
        return game_map
    except IndexError as e:
        print("Error: make sure you input rom/column as 0, 1 or 2", e)
    except Exception as e:
        print("Somthing went very wrong!", e)


def win(current_game):
    # Horizontal
    for row in game:
        if row.count(row[0]) == len(row) and row[0] != 0:
            print("Winner!")
    # Vertical
    for col in range(len(game)):
        check = []
        for row in game:
            check.append(row[col])
        if check.count(check[0]) == len(check) and check[0] != 0:
            print("Winner!")

    # Diagonal
    diags_l = []
    for ix in range(len(game)):
        diags_l.append(game[ix][ix])

    if diags_l.count(diags_l[0]) == len(diags_l) and diags_l[0] != 0:
        print("Winner on diag_r!")

    diags_r = []
    for col, row in enumerate(reversed(range(len(game)))):
        diags_r.append(game[row][col])

    if diags_r.count(diags_r[0]) == len(diags_r) and diags_r[0] != 0:
        print("Winner on diag_l!")


play = True
players = [1, 2]
while play:
    game = [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]]

    game_won = False
    game = game_board(game, display=True)
    player_choice = itertools.cycle([1, 2])
    while not game_won:
        win(game)
        current_player = next(player_choice)
        print(f"Current player: {current_player}")
        column_choice = int(
            input("What column do you want to play? (0, 1, 2): "))
        row_choice = int(input("What row do you want to play? (0, 1, 2): "))
        game = game_board(game, current_player, row_choice, column_choice)
