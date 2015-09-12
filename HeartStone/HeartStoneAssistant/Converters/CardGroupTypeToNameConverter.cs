using System;
using System.Globalization;
using System.Windows.Data;
using HeartStoneAssistant.Model.Enum;

namespace HeartStoneAssistant.Converters
{
    public class CardGroupTypeToNameConverter:IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            CardGroupType cardGroup;
            if (Enum.TryParse(value.ToString(), out cardGroup))
            {
                switch (cardGroup)
                {
                        case CardGroupType.Druid:
                        return "德鲁伊";
                        case CardGroupType.Hunter:
                        return "猎人";
                        case CardGroupType.Mage:
                        return "法师";
                        case CardGroupType.Paladin:
                        return "圣骑士";
                        case CardGroupType.Priest:
                        return "牧师";
                        case CardGroupType.Rogue:
                        return "潜行者";
                        case CardGroupType.Shaman:
                        return "萨满";
                        case CardGroupType.Warlock:
                        return "术士";
                        case CardGroupType.Warrior:
                        return "战士";
                        case CardGroupType.Basic:
                        return "中立";
                }
            }

            return value;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return value;
        }
    }
}
