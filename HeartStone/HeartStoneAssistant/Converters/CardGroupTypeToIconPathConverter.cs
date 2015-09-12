using System;
using System.Globalization;
using System.Windows.Data;
using HeartStoneAssistant.Model.Enum;

namespace HeartStoneAssistant.Converters
{
    public class CardGroupTypeToIconPathConverter : IValueConverter
    {
        private const string BaseImagePath = @"/Resource;component/Assets/HeroIcon/";

        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            CardGroupType heroType;
            if(Enum.TryParse(value.ToString(), out heroType))
            {
                return BuildImagePath(heroType);
            }

            return null;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            return value;
        }

        private string BuildImagePath(CardGroupType heroType)
        {
            return string.Format("{0}{1}.png", BaseImagePath, Enum.GetName(typeof(CardGroupType), heroType));
        }
    }
}
