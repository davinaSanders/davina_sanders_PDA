
require ('minitest/rg')
require ('minitest/autorun')
require("pry")
require_relative("../corrected_task_2.rb")
require_relative("../card.rb")

class TestCardGame < Minitest::Test

  def setup
      @cardGame1 = CardGame.new()
      @card1 = Card.new("clubs", "Ace", 1)
      @card2 = Card.new("spades", "Three", 3)
      @cards = [@card1, @card2]
  end

  def test_get_value
    assert_equal( 3, @card2.value)
  end

  def test_get_name
    assert_equal( "Three", @card2.name)
  end

  def test_get_suit
    assert_equal( "spades", @card2.suit)
  end
  #
  def test_checkforAce
    assert_equal(true, @cardGame1.checkforAce(@card1.value))
  end

  def test_checkforAce__false
    assert_equal(false, @cardGame1.checkforAce(@card2.value))
  end


  def test_highest_card
    highest = @cardGame1.highest_card(@card1, @card2)
    assert_equal("Three", highest)
  end
#
  def test_cards_total
    total = @cardGame1.cards_total(@cards)
    assert_equal("You have a total of 4", total)
  end


end
