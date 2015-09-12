using HeartStoneAssistant.Model.Enum;

namespace HeartStoneAssistant.Model
{
    public class Card
    {
        public int Id { get; set; }

        private string _name;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        private CardType _cardType;

        public CardType CardType
        {
            get { return _cardType; }
            set { _cardType = value; }
        }

        private string _description;

        public string Description
        {
            get { return _description; }
            set { _description = value; }
        }

        private string _addition;

        public string Addition
        {
            get { return _addition; }
            set { _addition = value; }
        }
    }
}
